<script setup>
import { reactive, ref, watch } from 'vue'
import cardOptions from './card-options.vue'
import edit from '@/assets/icons/edit.svg'
import deletE from '@/assets/icons/trash.svg'
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
const optionsList = reactive([
  { id: 1, name: 'ویرایش', src: edit, altIcon: edit },
  { id: 2, name: 'حذف', src: deletE, altIcon: deletE }
])
const imageUrl = ref(props.initialImageUrl)
const isUploaded = ref(false)
const emit = defineEmits(['image-uploaded'])

const onFileChange = () => {
  const file = event.target.files[0]
  if (file) {
    imageUrl.value = URL.createObjectURL(file)
    isUploaded.value = true
    emit('image-uploaded', { id: props.id, file })
  }
}
watch(imageUrl, (newUrl) => {
  if (newUrl) {
    emit('image-uploaded', { id: props.id, url: newUrl })
  }
})
const showOptionCrad = () => {
  isVisibleOptionsCard.value = true
}
</script>
<template>
  <div class="upload-card">
    <div v-if="imageUrl" class="upload-card__img">
      <img :src="imageUrl" :alt="altImage" />
    </div>
    <div class="upload-card__body-wrapper" v-if="!isUploaded">
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
          @change="onFileChange(id)"
          accept="image/*"
        />
      </div>
    </div>

    <div class="upload-card__caption caption">
      <span class="caption__text">{{ caption }}</span>
      <span class="caption__options" v-if="isUploaded">
        <cardOptions
          :options="optionsList"
          v-if="isVisibleOptionsCard"
          class="caption__options-list"
        />
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
.field_error {
  border: 1px solid red;
}
</style>
