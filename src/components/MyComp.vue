<template>
    <div class="btn">
        <span>
            {{ icon }}
        </span>
        <span>
            {{ text }}
        </span>
    </div>
</template>

<script>

export default {
    name: 'MyComp',
    props: {
        text: {
            type: String,
            default: 'Подробнее'
        }
    },
    computed: {
        icon () {
            if (this.text.length < 5) {
                return '!'
            } else if (this.text.length === 5) {
                return '*'
            } else {
                return '@'
            }
        }
    }
}
</script>

<style scoped>
.btn {
    background-color: #008800;
    color: white;
    padding: 4px 6px;
    cursor: pointer;
    border-radius: 4px;
}
</style>
