<script setup>
import { ref } from 'vue'
import cardOptions from './card-options.vue'
import BaseDivider from '../common/base-divider.vue'
const props = defineProps({
  caption: {
    type: String,
    required: true
  },
  altImage: {
    type: String
  },
  id: {
    type: String,
    required: true
  },
  initialImageUrl: {
    type: String,
    default: null
  }
})
const isVisibleOptionsCard = ref(false)

const imageUrl = ref(props.initialImageUrl)
const isUploaded = ref(false)
const isDragging = ref(false)

const emit = defineEmits(['image-uploaded', 'image-deleted', 'image-edited'])

const onFileChange = (event) => {
  let file

  if (event.type === 'change') {
    file = event.target.files[0]
  } else if (event.type === 'drop') {
    console.log('Drop event:', event)
    file = event.dataTransfer?.files[0]
  }
  if (file) {
    imageUrl.value = URL.createObjectURL(file)
    isUploaded.value = true
    emit('image-uploaded', { id: props.id, file, url: imageUrl.value })
  }
}

const handleDragOver = (event) => {
  event.preventDefault()
  isDragging.value = true
}

const handleDragLeave = () => {
  isDragging.value = false
}

const handleDrop = (event) => {
  event.preventDefault()
  isDragging.value = false
  onFileChange(event)
}

const showOptionCrad = () => {
  isVisibleOptionsCard.value = !isVisibleOptionsCard.value
}
const handelImageEdit = () => {
  imageUrl.value = ''
  isUploaded.value = false
  isVisibleOptionsCard.value = false
  emit('image-edited', { id: props.id })
}
const handelImageDelete = () => {
  imageUrl.value = ''
  isUploaded.value = false
  isVisibleOptionsCard.value = false
  emit('image-deleted', { id: props.id })
}
</script>
<template>
  <div
    class="upload-card"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
  >
    <div v-if="imageUrl" class="upload-card__img">
      <img :src="imageUrl" :alt="altImage" />
    </div>
    <div
      :class="['upload-card__body-wrapper', { 'upload-card__body-wrapper_dragging': isDragging }]"
      v-if="!isUploaded"
    >
      <div class="upload-card__body">
        <img class="upload-card__icon" src="./../../assets/icons/uploader.svg" alt="upload" />
        <label :for="id" class="upload-card__label">
          <span class="upload-card__label_light">تصویر را بکشید و اینجا رها کنید یا </span>
          <span class="upload-card__label_bold">کلیک کنید . </span>
        </label>
        <input
          class="upload-card__input"
          type="file"
          :id="id"
          @change="onFileChange"
          accept="image/*"
        />
      </div>
    </div>

    <div class="upload-card__caption caption">
      <span class="caption__text">{{ caption }}</span>
      <span class="caption__options" v-if="isUploaded">
        <cardOptions v-if="isVisibleOptionsCard" class="caption__options-list">
          <template #main>
            <div class="options" @click="handelImageEdit()">
              <img class="options__icon" src="../../assets/icons/edit.svg" alt="edit" />
              <span class="options__text options__text_edit">ویرایش</span>
            </div>
            <BaseDivider class="options__divider" />
            <div class="options" @click="handelImageDelete()">
              <img class="options__icon" src="../../assets/icons/trash.svg" alt="delete" />
              <span class="options__text options__text_delete">حذف</span>
            </div>
          </template>
        </cardOptions>
        <img src="../../assets/icons/more-dark.svg" alt="more" @click="showOptionCrad" />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.upload-card {
  @include flex-box(column);
  background-color: var(--secondary-300);
  border-radius: 0.75rem;
  width: 20rem;
  height: 14.5rem;

  &__body-wrapper {
    @include flex-box(column, center, center);
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23E2EDFFFF' stroke-width='2' stroke-dasharray='6%2c 10' stroke-dashoffset='4' stroke-linecap='round'/%3e%3c/svg%3e");
    height: 11.25rem;
    &.upload-card__body-wrapper_dragging {
      background-color: var(--primary-100);
    }
  }
  &__img {
    height: 11.25rem;
  }
  &__icon {
    width: 4.25rem;
    height: 3.15881rem;
  }
  &__body {
    @include flex-box(column, center, center, 0.5rem);
  }
  &__label {
    text-align: center;
    width: 10rem;
    font-size: 0.875rem;
    &_light {
      color: var(--secondary-200);
    }
    &_bold {
      color: var(--primary-500);
      font-weight: 500;
    }
  }
  &__input {
    visibility: hidden;
  }
}
.caption {
  @include flex-box(row, space-between, center);
  padding: 1rem 0.75rem;

  &__text {
    @include font-style(0.875rem, 400);
    color: var(--black-500);
  }
  &__options {
    position: relative;
    &-list {
      width: 7rem;
      box-shadow: 0px 0px 4px 0px rgba(0, 67, 101, 0.05);
      background-color: var(--color-white);
      border-radius: 0.5rem;
      padding: 0.5rem 0.75rem;
      position: absolute;
      bottom: 1rem;
      left: 1rem;
    }
  }
}
.options {
  width: 5rem;
  @include flex-box(row, flex-start, center, 0.5rem);
  &__text {
    @include font-style(0.875rem, 400);
    &_edit {
      color: var(--black-500);
    }
    &_delete {
      color: var(--fail-500);
    }
  }
  &__divider {
    height: 1px;
  }
}
</style>
