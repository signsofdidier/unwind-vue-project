<template>
  <SecondHeader title="Cozy Rooms" />
  <BookingForm />
  <RoomsComponent />
  <ServicesComponent />
</template>

<script setup>
import BookingForm from '@/components/BookingForm.vue';
import FeaturedRooms from '@/components/FeaturedRooms.vue';
import RoomsComponent from '@/components/RoomsComponent.vue';
import SecondHeader from '@/components/SecondHeader.vue';
import ServicesComponent from '@/components/ServicesComponent.vue';
</script>

<style scoped></style>
