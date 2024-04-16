<template>
    <!-- in previous we used array for props defining but in that case if someone use ours they will or we also do not
    know which props are which type and many other func. like requred/default value , so we use obj instead of that -->
    <div class="container border p-2">
        <h2>{{ title }}</h2>
        <h3>Likes: {{ likes }}</h3>
        <h4>Published: {{ isPublished? 'Yes': 'No' }}</h4>
    </div>
    </template>


<script>
export default {
    name: 'article_pages',
    props: {
        // title: String,               // when only type we tell
        title: {
            type: String,
            required: true,
            default: 'Old Times Article'
        },
        // likes: Number,
        likes: {
            type: Number,
            required: false,
            default: 50
        },
        // isPublished: Boolean
        isPublished: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>