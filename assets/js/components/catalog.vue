<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1>
                    Products
                </h1>
            </div>
        </div>
        <div class="row">
            <product-list
                :products="products"
                :loading="loading"/>
        </div>
        <div class="row">
            <legend-component :title="legend"/>
        </div>
    </div>
</template>

<script>
import LegendComponent from '@/components/legend';
import ProductList from '@/components/product-list';
import { fecthProducts } from '../services/product-service';

export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            products: [],
            loading: false,
            legend: "Shipping takes 10-12 weeks, and products probably won't work",
        };
    },
    async created() {
        this.loading = true;
        let response;
        try {
            response = await fecthProducts(this.currentCategoryId);
            this.loading = false;
        } catch (e) {
            this.loading = false;

            return;
        }

        this.products = response.data["hydra:member"];
    },

};
</script>
