<template>
    <div class="snakeai-wrapper">
        <table class="snakeai">
            <tr class="row" v-bind:key="key1" v-for="(row, key1) in state">
                <td class="square" v-bind:key="key2" v-for="(square, key2) in row" v-bind:class="{food: square == 2, snake: square == 1}"></td>
            </tr>
        </table>

        <div class="description">
            <h1> SnakeAI</h1>
            <span>=)</span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'snakeai',
  data: function () {
    return {
      'play_url': 'https://snakeai-api.herokuapp.com/play',
      'state': [[0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
    }
  },
  methods: {
    getState: function () {
      return [[[0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]], [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 1.0, 1.0, 0.0, 0.0, 0.0], [1.0, 0.0, 1.0, 0.0, 0.0, 0.0], [0.0, 0.0, 1.0, 1.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]], [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 1.0, 0.0, 0.0, 1.0]]]
    }
  }
}
</script>

<style scoped>

.snakeai-wrapper {
    width: 100%;
    padding: 2% 0 0 0;
}

.snakeai {
    width: 30%;
    position: relative;
    top: 5%;
    left: 17%;
}

.snakeai-wrapper .description {
    margin: 0;
    width: 30%;
    position: absolute;
    top: 5%;
    right: 17%;
}

.snakeai-wrapper .description h1{
    text-align: center;
}

.snakeai .square:before{
    content: "";
    display: block;
    padding-top: 100%;
}

.snakeai .square {
    margin: 0;
    padding: 0;
    background-color: gray;
}

.snakeai .food {
    background-color: green;
}

.snakeai .snake {
    background-color: red;
}

@media (max-width: 650px) {
    .snakeai {
        width: 50%;
        position: relative;
        top: 25%;
        left: 25%;
    }

    .snakeai-wrapper .description {
        display: block;
        position: relative;
        width: 50%;
        top: 25%;
        left: 25%;
    }
}
</style>
