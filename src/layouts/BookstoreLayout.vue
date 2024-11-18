<template>
    <q-layout view="hHh lpR fFf">

        <q-header reveal elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
            </q-toolbar>

            <q-tabs align="center">
                <q-route-tab to="/" label="Book Detail" />
            </q-tabs>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer reveal bordered class="bg-grey-8 text-white">
        </q-footer>

    </q-layout>
</template>