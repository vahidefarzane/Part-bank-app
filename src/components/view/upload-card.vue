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
        <img class="upload-card__icon" src="@/assets/icons/uploader.svg" alt="upload" />
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
              <img class="options__icon" src="@/assets/icons/edit.svg" alt="edit" />
              <span class="options__text options__text_edit">ویرایش</span>
            </div>
            <BaseDivider class="options__divider" />
            <div class="options" @click="handelImageDelete()">
              <img class="options__icon" src="@/assets/icons/trash.svg" alt="delete" />
              <span class="options__text options__text_delete">حذف</span>
            </div>
          </template>
        </cardOptions>
        <img src="@/assets/icons/more-dark.svg" alt="more" @click="showOptionCrad" />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/sass/components/view/upload-card.scss';
</style>
