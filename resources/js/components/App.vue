<template>
    <component :is=component v-bind="componentProps">
    </component>
</template>

<script>
export default {
    props: [
        "component",
        "componentProps"
    ],
}
</script>
