<script setup>
import { reactive, inject, ref, computed } from "vue";
import ContentHeader from "@/components/content/Content-header.vue";
import ContentFooter from "@/components/content/Content-footer.vue";
import logo from "@/assets/img/labubu1.jpg"; // 導入圖片

// 🚀 Data
const layoutTable = reactive({
    cols: "",
    class: "ma-auto",
});

const desserts = reactive({
    list: [
        {
            name: "LABUBU Time to chill-Vinyl Plush Doll",
            quantity: 1,
            img: logo,
            price: 2380
        },
        {
            name: "LABUBU Time to chill-Vinyl Plush Doll",
            quantity: 1,
            img: logo,
            price: 2380
        },
        {
            name: "LABUBU Time to chill-Vinyl Plush Doll",
            quantity: 1,
            img: logo,
            price: 2380
        },
    ],
});

// 🚀 method
const subtotal = computed(() => {
    return desserts.list.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

const remove = () => {
    console.log("123")
}

</script>

<template>
    <v-table theme="dark">
        <thead>
            <tr>
                <th class="text-left"></th>
                <th class="text-left text-center">QUANTITY</th>
                <th
                    class="text-left text-right pr-10"
                    style="width:150px"
                >TOTAL</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="item in desserts.list"
                :key="item.name"
            >
                <td class="px-0">
                    <router-link
                        to="/product"
                        class="text-decoration-none text-white"
                    >
                        <div class="d-flex align-center ga-2">
                            <div>
                                <v-img
                                    width="150px"
                                    :src="item.img"
                                    class="ma-3"
                                />
                            </div>
                            <div class="d-flex align-center ga-2 flex-column">
                                <div class="font-weight-bold">{{ item.name }}</div>
                                <v-btn
                                    color="grey-darken-3"
                                    class="mr-auto"
                                    size="small"
                                    @click.stop="remove()"
                                >REMOVE</v-btn>
                            </div>
                        </div>
                    </router-link>
                </td>
                <td class="font-weight-bold">
                    <v-text-field
                        type="number"
                        variant="outlined"
                        v-model="item.quantity"
                        style="width:90px"
                        hide-details
                        min="0"
                    ></v-text-field>
                </td>
                <td class="font-weight-bold text-right pr-10 text-overline">NT. <strong>{{ item.price * item.quantity
                        }}</strong>
                </td>
            </tr>
            <tr>
                <td></td>
                <td class="text-overline text-center">Subtotal</td>
                <td class="text-overline font-weight-bold text-right pr-10">NT. {{ subtotal }}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <v-btn
                        color="red"
                        size="small"
                    >Check Out</v-btn>
                </td>

            </tr>
        </tbody>
    </v-table>
</template>
