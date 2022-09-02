<template>
    <nav class="navigation-menu">
        <ul class="flex">
            <li v-for="(nav, i) in menus" :key="i" class="relative group">
                <n-link :to="`${nav.uri}`" class="text-sm font-medium leading-relaxed block px-4 py-7 group-hover:text-primary">
                    <span
                        class="relative py-1 before:contents-[] before:absolute before:left-auto before:right-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-current before:transition-all before:duration-300 group-hover:before:w-full group-hover:before:bg-primary group-hover:before:left-0 group-hover:before:right-auto"
                        >{{ nav.label }}</span
                    >
                    <i v-if="nav.submenu" class="fas fa-angle-down text-[12px] pl-.5 text-light"></i>
                </n-link>

                <ul
                    v-if="nav.submenu"
                    class="top-full left-0 absolute min-w-[250px] bg-white py-4 rounded border-[#ededed] shadow-[0_0_30px_rgba(0,0,0,12%)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-[20px] group-hover:translate-y-0 z-30 before:absolute before:-top-2.5 before:left-10 before:contents-[] before:border-b-[10px] before:border-white before:border-l-transparent before:border-r-transparent before:border-l-8 before:border-r-8"
                >
                    <li v-for="(subNav, index) in nav.submenu" :key="index">
                        <n-link :to="`${subNav.uri}`" class="text-[13px] font-medium text-light block py-2 px-[30px] hover:text-primary">{{ subNav.label }}</n-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import menus from "~/data/navigation.json";

export default {
    data() {
        return {
            menus,
        };
    },
};
</script>
