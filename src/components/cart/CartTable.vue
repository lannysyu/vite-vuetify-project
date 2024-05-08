<script setup>
import { reactive, inject, ref } from "vue";
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
</script>

<template>
    <v-table theme="dark">
        <thead>
            <tr>
                <th class="text-left"></th>
                <th class="text-left">QUANTITY</th>
                <th class="text-left">TOTAL</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="item in desserts.list"
                :key="item.name"
            >
                <td class="px-0">
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
                                color="grey-darken-3 mr-auto"
                                size="small"
                            >REMOVE</v-btn>
                        </div>
                    </div>
                </td>
                <td class="font-weight-bold">
                    <v-text-field
                        type="number"
                        variant="outlined"
                        v-model="item.quantity"
                        style="width:90px"
                        hide-details
                    ></v-text-field>
                </td>
                <td class="font-weight-bold">NT. <strong>{{ item.price * item.quantity }}</strong></td>
            </tr>
        </tbody>
    </v-table>
</template>
