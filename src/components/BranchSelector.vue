<template>
  <div class="mxed-block">
    <div class="mxed-label">
      <span class="mxed-label__title mxed-label__title--required"
        >Ваш филиал</span
      >
    </div>
    <div class="mxed-dropdown">
      <div
        @click="openDropdown"
        class="mxed-dropdown__title"
        :class="{ 'mxed-dropdown__title--disabled': isOnline }"
      >
        {{ currentCity }}
      </div>
      <transition name="fade">
        <ul class="mxed-dropdown-list" v-if="isSelectActive">
          <li
            class="mxed-dropdown-list__item"
            v-for="(city, index) in cities"
            :key="index"
            @click="changeCity(city)"
          >
            <span>{{ city.title }}</span>
          </li>
        </ul>
      </transition>
    </div>
    <div class="mxed-checkbox">
      <input
        class="mxed-checkbox__input"
        id="checkbox"
        type="checkbox"
        @click="changeOnline"
      />
      <label
        class="mxed-checkbox__label"
        for="checkbox"
        :class="{ 'mxed-checkbox__label--checked': isOnline }"
        >Онлайн</label
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BranchSelector",
  data() {
    return {
      isSelectActive: false,
    };
  },
  computed: {
    ...mapGetters("cities", {
      cities: "cities",
      isOnline: "isOnline",
      currentCity: "currentCity",
    }),
  },
  methods: {
    ...mapActions("cities", [
      "getCities",
      "changeIsOnline",
      "changeCurrentCity",
    ]),
    openDropdown() {
      if (!this.isOnline) {
        this.isSelectActive = !this.isSelectActive;
      }
    },
    changeCity(city) {
      this.isSelectActive = false;
      this.changeCurrentCity(city.title);
    },
    changeOnline() {
      this.changeIsOnline(!this.isOnline);
    },
  },
  async mounted() {
    await this.getCities();
  },
};
</script>

<style lang="scss" scoped>
@mixin dropdown {
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  width: 100%;
  max-width: 236px;
  cursor: pointer;
}
.mxed-dropdown {
  position: relative;
  margin-bottom: 20px;
  .mxed-dropdown__title {
    position: relative;
    letter-spacing: -0.3px;
    text-align: left;
    background: #fff;
    padding: 9px;
    @include dropdown;
    &:after {
      content: "";
      background: url("../assets/images/arrow.png") 0 0 no-repeat;
      position: absolute;
      top: 10px;
      right: 10px;
      width: 15px;
      height: 15px;
    }
    &--disabled {
      cursor: not-allowed;
      background: #f4f4f4;
    }
  }
  .mxed-dropdown-list {
    position: absolute;
    top: 38px;
    left: 0;
    z-index: 3;
    background: #fff;
    @include dropdown;
    .mxed-dropdown-list__item {
      display: flex;
      align-items: center;
      height: 34px;
      &:hover {
        background: #e1e1e1;
      }
      span {
        margin-left: 9px;
      }
    }
  }
  .fade-enter-active {
    animation: 0.5s fade forwards;
  }
  .fade-leave-active {
    animation: 0.5s fade reverse;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
.mxed-checkbox {
  position: relative;
  .mxed-checkbox__input {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
  }
  .mxed-checkbox__label {
    padding-left: 34px;
    line-height: 20px;
    letter-spacing: -0.3px;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -4px;
      left: 0;
      z-index: 1;
      width: 24px;
      height: 24px;
      border: 1px solid #000;
      box-sizing: border-box;
      border-radius: 2px;
      background-color: #fff;
      cursor: pointer;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 4px;
      z-index: 2;
      width: 14px;
      height: 14px;
      background: url("../assets/images/check.svg") no-repeat;
      background-size: 16px 16px;
      opacity: 0;
      cursor: pointer;
    }
    &--checked {
      &:after {
        opacity: 1;
      }
    }
  }
}
</style>
