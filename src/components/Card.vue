<template>
    <div class="card">
        <div class="card__img-container">
            <span class="card__img">Picture</span>
        </div>
        <div class="card__content">
            <div class="card__content__title-wrapper">
                <span class="card__content__title">Title</span>
            </div>
            <div class="card__content__subtitle-wrapper" >
                <span  class="card__content__subtitle card__content__subtitle--red">Subtitle</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComp'
}
</script>

<style lang="less">
@cred: green;

@borderSize: 4px;

.card {
    width: 200px;
    border-radius: 10px;
    border: 1px solid gray;
    overflow: hidden;

    &__img {
        width: 100%;

        &-container {
            width: 100%;
            overflow: hidden;
            background-color: brown;
        }
    }

    &__content {
        padding: 10px;

        &__title {
            font-size: 20px;

            &-wrapper {
                padding: @borderSize*1.5 @borderSize;
            }
        }

        &__subtitle {
            font-size: 14px;

            &-wrapper {
                padding: @borderSize;
            }

            &--red {
                color: red;
                &:hover {
                    color: @cred;
                }
            }
        }
    }
}
</style>