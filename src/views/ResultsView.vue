<template>
  <div class="wrapper">
    <y-left-side-bar />

    <main class="main">

      <y-modal v-if="window === 'main'" class="main__modal">
        <header class="header">
          <div class="header__select">
            <div v-if="blocks.length === 0" class="heading header__heading">Результаты</div>
            <y-select
              v-else
              font-size="2"
              :selects="blocks"
              @select="updateBlocksSelect"
            />
          </div>
          <div class="company__date__select">
            <y-select
              :selects="companies"
              @select="updateCompaniesSelect"
            />
            <y-date/>
          </div>
        </header>
        <y-results-list v-if="results.length > 0">
          <y-results-list-item
            v-for="result in results"
            :name="result.block_title"
            :user_id="result.user_id"
            :username="result.username"
            :date="result.createdAt"
            @edit="openEditWindow(result)"
          />
        </y-results-list>
        <p class="new__results" v-else>
          Здесь будут отображаться результаты компаний. Для начала, укажите компанию, либо дату
        </p>
      </y-modal>
      <y-modal v-if="window==='dashboard'">
          <y-dashboard
            :block="editBlock"
            @close="closeEditWindow"
          />
      </y-modal>

    </main>
  </div>
</template>

<script>
import CreateBlock from '@/components/Block/CreateBlock';
import EditBlock from '@/components/Block/EditBlock';
import CreateCompany from "@/components/Company/CreateCompany";
import YSelect from "@/components/UI/YSelect";
import YDate from "@/components/UI/YDate";
import YPopup from "@/components/UI/YPopup";
import YPopupError from "@/components/UI/YPopupError";
import YResultsListItem from "@/components/UI/YResultsListItem";
import YResultsList from "@/components/Results/YResultsList";
import YDashboard from "@/components/Results/YDashboard";

import Company from '@/api/admin/Company';
import Results from '@/api/admin/Results';
import Block from '@/api/admin/Block';
import Test from '@/api/admin/Test';

function update(data) {
    const results = new Results()
    results.getAll({ filters: data.filters })
      .then(res => {
        if(res.ok) {
          res.json().then(r => {
            data.results = r
          })
        } else {
          data.$store.commit('openErrorPopup', 'Не удалось загрузить результаты')
        }
      })
}

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
  created() {
    update(this)
    this.companies.push({ })
    this.companies.forEach(el => el['active'] = false)
    this.companies[0]['name'] = 'Все компании'
    this.companies[0]['id'] = null
    this.companies[0]['active'] = true
    const company = new Company()
    company.getAllCompanies()
      .then(res => {
        if (res.ok) {
          res.json().then(r => {
            r.forEach(el => {
              el.active = false
              this.companies.push(el)
            })
          })
        }
      })
  },
  data() {
    return {
      window: 'main',
      results: [],
      companies: [],
      blocks: [],
      filters: {
        createdAt: null,
        block_id: null,
        company_id: null
      },
      editBlock: null
    }
  },
  methods: {
    updateCompaniesSelect(n) {
      this.companies.map(el => {
        el.active = el.id === n.id;
      })
      const select = this.companies.filter(el => el.active)
      this.filters.company_id = select[0].id

      if (!(typeof this.filters.company_id === 'object')) {
        const block = new Block()
        this.blocks.push({ })
        this.blocks.forEach(el => el['active'] = false)
        this.blocks[0]['name'] = 'Все блоки'
        this.blocks[0]['id'] = null
        this.blocks[0]['active'] = true
        block.getAll({ filters: { company_id: this.filters.company_id } })
          .then(res => {
            if (res.ok) {
              res.json().then(r => {
                this.blocks = r
              })
            } else {
              this.$store.commit('openErrorPopup', 'Не удалось загрузить блоки компании')
            }
          })
      } else {
        this.filters.block_id = null
        this.blocks = []
      }

      update(this)
    },
    updateBlocksSelect(n) {
      this.blocks.map(el => {
        el.active = el.id === n.id;
      })

      const select = this.companies.filter(el => el.active)
      this.filters.block_id = select[0].id

      update(this)
    },
    openEditWindow(obj) {
      this.$store.commit('setEditBlock', obj)
      this.window = 'dashboard'
    },
    closeEditWindow() {
      this.window = 'main'
      this.$store.commit('removeEditBlock')
      update(this)
    }
  }
}
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
.new__results{
  text-align: center;
  align-items: center;
  font-size: 2rem;

}


</style>
