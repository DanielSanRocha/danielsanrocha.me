<template>
  <div class="snakeai-wrapper">
    <table class="snakeai">
      <tr class="row" v-bind:key="key1" v-for="(row, key1) in grid">
        <td
          class="square"
          v-bind:key="key2"
          v-for="(square, key2) in row"
          v-bind:class="{'snake-head': square == 1, snake: square == 2, food: square == 3}"
        ></td>
      </tr>
    </table>

    <div class="description">
      <h1>SnakeAI</h1>
      <span>A DeepLearning approach for constructing a AI to play snake =) (https://github.com/DanielSanRocha/SnakeAI)</span>
    </div>
  </div>
</template>

<script>
import * as tf from "@tensorflow/tfjs";

export default {
  name: "snakeai",
  props: ["gridSizeX", "gridSizeY"],
  data: function() {
    const snake = this.resetSnake();
    const food = this.spawnFood();

    this.spawnFood();
    const grid = Array(this.$props.gridSizeX)
      .fill(0)
      .map(() => Array(this.$props.gridSizeY));

    return {
      snake,
      food,
      grid
    };
  },
  mounted: async function() {
    const host = window.location.host;
    this.model = await tf.loadLayersModel(
      `https://${host}/snakeai_brain/model.json`
    );

    this.playInterval = setInterval(
      async function() {
        await this.tick();
      }.bind(this),
      150
    );
  },
  methods: {
    renderGrid: function(state) {
      this.grid = Array(this.$props.gridSizeX)
        .fill()
        .map(() => Array(this.$props.gridSizeY).fill(0));

      this.grid[this.snake.x][this.snake.y] = 1;

      this.snake.pieces.forEach((snakePiece, index) => {
        if (index !== 0) this.grid[snakePiece[0]][snakePiece[1]] = 2;
      });

      this.grid[this.food.x][this.food.y] = 3;

      return this.grid;
    },
    getLastPiecePosition: function() {
      return this.snake.pieces.length !== 0
        ? this.snake.pieces[this.snake.pieces.length - 1]
        : [this.snake.x, this.snake.y];
    },
    tick: async function() {
      this.snake.lastPieceLastPosition = this.getLastPiecePosition();
      const move = await this.play();
      this.snakeTick(move);

      if (this.snakeHasTouchedFood()) {
        this.snakeGrow();
        this.food = this.spawnFood();
      }
      if (this.snakeOutOfBound() || this.snakeTouchedItself()) {
        this.reset();
      }
      this.renderGrid();
    },
    snakeTouchedItself: function() {
      for (let i = 1; i < this.snake.pieces.length; i++) {
        if (
          this.snake.x === this.snake.pieces[i][0] &&
          this.snake.y === this.snake.pieces[i][1]
        ) {
          return true;
        }
      }
      return false;
    },
    snakeOutOfBound: function() {
      if (
        this.snake.x >= this.$props.gridSizeX ||
        this.snake.y >= this.$props.gridSizeY ||
        this.snake.x < 0 ||
        this.snake.y < 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    snakeHasTouchedFood: function() {
      if (this.snake.x === this.food.x && this.snake.y === this.food.y) {
        return true;
      }
      return false;
    },
    snakeGrow: function() {
      this.snake.pieces.push(this.snake.lastPieceLastPosition);
    },
    resetSnake: function() {
      const x =
        Math.floor(Math.random() * this.$props.gridSizeX) %
        this.$props.gridSizeX;
      const y =
        Math.floor(Math.random() * this.$props.gridSizeY) %
        this.$props.gridSizeY;

      return { x, y, pieces: [[x, y]], direction: 0 };
    },
    reset: function() {
      this.snake = this.resetSnake();
      this.food = this.spawnFood();
    },
    spawnFood: function() {
      while (true) {
        const x =
          Math.floor(Math.random() * this.$props.gridSizeX) %
          this.$props.gridSizeX;
        const y =
          Math.floor(Math.random() * this.$props.gridSizeY) %
          this.$props.gridSizeY;

        const invalid = false;

        const pieces = this.snake ? this.snake.pieces : [];
        for (let i = 0; i < pieces.length; i++) {
          if (x === pieces[i][0] && y === pieces[i][1]) {
            invalid = true;
            break;
          }
        }

        if (invalid) continue;

        return { x, y };
      }
    },
    snakeTick: function(move) {
      if (
        this.snake.direction - move !== -2 &&
        this.snake.direction - move !== 2
      ) {
        this.snake.direction = move;
      }

      switch (this.snake.direction) {
        case 0:
          this.snake.y -= 1;
          break;
        case 1:
          this.snake.x += 1;
          break;
        case 2:
          this.snake.y += 1;
          break;
        case 3:
          this.snake.x -= 1;
          break;
      }

      for (let i = this.snake.pieces.length - 1; i >= 1; i--) {
        this.snake.pieces[i] = this.snake.pieces[i - 1];
      }

      this.snake.pieces[0] = [this.snake.x, this.snake.y];
    },
    getTensor: function() {
      const tensor = Array(3)
        .fill()
        .map(() =>
          Array(this.$props.gridSizeX)
            .fill()
            .map(() => Array(this.$props.gridSizeY).fill(0))
        );

      tensor[0][this.snake.x][this.snake.y] = 1.0;

      this.snake.pieces.forEach((snakePiece, index) => {
        if (index !== 0) tensor[1][snakePiece[0]][snakePiece[1]] = 1.0;
      });

      tensor[2][this.food.x][this.food.y] = 1.0;

      return tensor;
    },
    play: async function() {
      const tensor = tf.tensor([this.getTensor()]);
      const prediction = await this.model.predict(tensor).array();

      return this.argMax(prediction[0]);
    },
    argMax: function(array) {
      return array
        .map((x, i) => [x, i])
        .reduce((r, a) => (a[0] > r[0] ? a : r))[1];
    }
  }
};
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

.snakeai-wrapper .description h1 {
  text-align: center;
}

.snakeai .square:before {
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
  background-color: blue;
}

.snakeai .snake-head {
  background-color: red;
}

.snakeai .snake {
  background-color: green;
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
