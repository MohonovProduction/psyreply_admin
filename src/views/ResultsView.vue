<template>
  <div class="wrapper">
    <y-left-side-bar />
<!--    <y-popup/>-->

    <main class="main">

      <y-modal v-if="window === 'main'" class="main__modal">
        <header class="header">
          <div class="header__select">
            <div class="heading header__heading">Результаты</div>
          </div>
          <div class="company__date__select">
            <y-select/>
            <y-date/>
          </div>

        </header>
        <y-results-list>
          <y-results-list-item/>
        </y-results-list>
      </y-modal>
      <y-modal v-if="window==='dashboard'">
          <y-dashboard/>
      </y-modal>

    </main>
  </div>
</template>

<script>
import CreateBlock from '@/components/Block/CreateBlock';
import EditBlock from '@/components/Block/EditBlock';
import CreateCompany from "@/components/Company/CreateCompany";
import Company from '@/api/admin/Company';
import YSelect from "@/components/UI/YSelect";
import YDate from "@/components/UI/YDate";
import YPopup from "@/components/UI/YPopup";
import YPopupError from "@/components/UI/YPopupError";
import YResultsListItem from "@/components/UI/YResultsListItem";
import YResultsList from "@/components/Results/YResultsList";
import YDashboard from "@/components/Results/YDashboard";

export default {
  name: "RelultsView",
  components: {
    YResultsList,
    YResultsListItem,
    YPopupError,
    YPopup,
    YDate,
    YSelect,
    YDashboard,

  },
  data() {
    return {
      window: 'dashboard',

    }
  }}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: min-content 1fr;
  width: 100%;
}

.main {
  padding: 4.125rem;
}
.main__modal {
  display: grid;
  grid-gap: 2.5625rem;
}

.header {
  display: grid;
  grid-template-columns: auto min-content;
}
.header__select{
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: left;

}
.header__heading{
  margin-right: 0.5rem;
  font-size:2rem;
}
.header__arrow__button img{
  width: 26px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
}
.company__date__select{
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

</style>
