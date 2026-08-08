<template>
    <div>
        <div class="line"></div>
        <h4>{{ props.title + " - " + props.position }}</h4>
        <h5>(ISART Digital)</h5>
        <h6>{{ props.date }}</h6>
    </div>
    <br>
    <div>
        <h6><b>Techniques :</b></h6>
        <p>
            <span class="skill-tag" v-for="tag in props.technology">
                {{ tag }}
            </span>
        </p>
    </div>
</template>
<script setup>
    const props = defineProps({
        title : String,
        position : String,
        date : String,
        technology : Array
    });
</script>