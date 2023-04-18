app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: ['50% cotton', '30% wool', '20% polyester']
        }
    },
    template:
    /*html*/
    `<ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>`,
    data() {
        return {

        }
    }
})