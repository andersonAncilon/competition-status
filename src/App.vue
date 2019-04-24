<template>
  <div id="app">
    <div class="col-md-8 mx-auto">
      <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg">Código</span>
        </div>
        <input
          type="number"
          class="form-control"
          aria-label="Caixa de texto para pesquisar a competição pelo seu código"
          aria-describedby="inputGroup-sizing-lg"
          v-model="competitionCode"
        >
      </div>
      <button
        class="btn btn-success btn-lg mt-3"
        aria-label="Botão para realizar a busca"
        @click="loadCompetitionData(competitionCode)"
      >Buscar</button>
    </div>
    <div class="container mt-5">
      <template v-if="standings">
        <h2
          class="text-center text-success"
        >Nome da competição: {{ competitionData.area.name }} {{ competitionData.name }}</h2>
        <h2 class="mt-5 text-danger" v-if="standings.length === 0">Nenhum resultado disponível</h2>
        <div class="row">
          <template v-for="(standing, index) in standings">
            <Card :key="index" v-for="(std, index) in standing.table" :standing="std"/>
          </template>
        </div>
      </template>
      <h2
        v-else
        aria-label="Header com o seguinte escrito: Faça uma pesquisa"
        :class="['mx-automt-5', error ? 'text-danger' : 'text-primary' ]"
      >{{ message }}</h2>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";
import { Get } from "./helpers/Api";

export default {
  name: "app",
  data() {
    return {
      standings: null,
      competitionData: null,
      competitionCode: "",
      error: false,
      message: "Faça uma pesquisa :)"
    };
  },
  components: {
    Card
  },
  methods: {
    async loadCompetitionData(code) {
      const route = `${code}/standings?standingType=HOME`;
      this.error = false;

      try {
        await Get(route).then(res => {
          this.standings = res.data.standings;
          this.competitionData = res.data.competition;
          this.message = "Faça uma pesquisa :)";
        });
      } catch (err) {
        this.standings = null;
        this.error = true;
        this.message = "Código inválido!";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
