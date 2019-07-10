<template>
    <div class="container">
        <h1> About </h1>

        <div class="list-group">
            <button v-for="number in numbers" :key="number" type="button" class="list-group-item list-group-item-action active">
                {{ number }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["numbers"]
}
</script>

<style>

</style>
