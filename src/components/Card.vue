<template>
  <div class="col-md-3 mb-2">
    <div
      v-if="standing.position"
      :class="['card', standing.position === 1 || standing.position === 2 || standing.position === 3  ? 'border-success' : '' ]"
    >
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>Posição no ranking:</strong>
          {{ standing.position }}
        </li>
        <li class="list-group-item">
          <strong>Nome do time:</strong>
          {{ standing.team.name }}
        </li>
        <li class="list-group-item">
          <strong>Vitórias:</strong>
          {{ standing.won }}
        </li>
        <li class="list-group-item">
          <strong>Empates:</strong>
          {{ standing.draw }}
        </li>
        <li class="list-group-item">
          <strong>Derrotas:</strong>
          {{ standing.lost }}
        </li>
        <li class="list-group-item">
          <strong>Pontos:</strong>
          {{ standing.points }}
        </li>
      </ul>
    </div>
    <h2 v-else>Nenhum resultado disponível!</h2>
  </div>
</template>

<script>
export default {
  props: {
    standing: {
      type: Object,
      default: null
    }
  }
};
</script>

posição no ranking (atual ou final, caso o campeonato já tenha acabado)
nome do time
vitórias
empates
derrotas
pontos

