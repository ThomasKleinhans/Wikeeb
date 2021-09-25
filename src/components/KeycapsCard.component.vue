<template>
    <q-card class="keycaps-card">
        <q-card-section>
            {{item.name}}
        </q-card-section>
        <q-img :src="imgURL">
        <div class="absolute-bottom">
            <q-chip size="12px" color="primary">
                {{item.material}}
            </q-chip>
            <q-chip size="12px" color="secondary">
                {{item.profile}}
            </q-chip>
            
            <q-space />

            <q-chip size="12px" :color="availabilityColor">
                {{item.availability}}
            </q-chip>
        </div>
        </q-img>
    </q-card>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
            },
        },
        data() {
            return {
                imgURL: ""
            }
        },
        methods: {
            getImage(){
                this.$store.$fb.getURLRessource(this.item.image).then((result)=>{
                    this.imgURL = result
                })
            }
        },
        computed: {
            availabilityColor() {
                switch (this.item.availability) {
                    case 'GB-Ended':
                    return "negative";

                    case 'GB-Live':
                    return "positive";

                    case 'GB-Upcoming':
                    return "warning";

                    case 'In-Stock':
                    return "positive";

                    case 'Interest Check':
                    return "info";

                    default :
                    return "dark";
                }
            }
        },
        mounted () {
            this.getImage();
        },
    }
</script>

<style lang="scss" scoped>

.keycaps-card{
    .q-card__section{
        background: #282E50;
    }
    .absolute-bottom{
        display: flex;
        background: none;
    }
}

</style>