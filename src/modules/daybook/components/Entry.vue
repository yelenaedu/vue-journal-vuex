<template>
    <div class="entry-container mb-3 pointer p-2"
        @click="$router.push({name: 'entry', params: { id: 10 }})">

        <!-- titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">09</span>
            <span class="mx-1 fs-5">Enero</span>
            <span class="mx-2 fw-light">2024, martes</span>
        </div>

        <div class="entry-description">
            Pariatur sunt esse proident culpa dolore qui aute nisi. Cupidatat cillum officia ut commodo tempor consectetur. Dolor in magna quis veniam nisi tempor ullamco excepteur laboris proident nostrud cupidatat ut exercitation. Amet esse consequat dolore non reprehenderit ut et consequat mollit sit. Nulla pariatur reprehenderit Lorem velit amet. Commodo pariatur dolore Lorem ad nostrud labore ipsum reprehenderit deserunt sunt nulla.
        </div>
    </div>
</template>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }    
}
.entry-description{
    font-size: 12px;
}

</style>