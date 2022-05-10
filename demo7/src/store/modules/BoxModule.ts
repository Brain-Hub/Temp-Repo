import objectPath from "object-path";
//import merge from "deepmerge";
import boxes from "@/core/config/DefaultBoxes";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { Mutation, Action, Module, VuexModule } from "vuex-module-decorators";
import BoxTypes from "@/core/config/BoxTypes";

import API, { graphqlOperation } from "@aws-amplify/api";
import { createCommand } from "@/graphql/mutations";

interface StoreInfo {
  config: BoxTypes;
  initial: BoxTypes;
}

@Module
export default class BoxModule extends VuexModule implements StoreInfo {
  config = boxes;
  initial = boxes;

  /**
   * Get config from layout config
   * @returns {function(path, defaultValue): *}
   */
  get Boxes() {
    return (path, defaultValue) => {
      return objectPath.get(this.config, path, defaultValue);
    };
  }

  @Mutation
  [Mutations.SET_BOXES](payload): void {
    this.config = payload;
  }

  @Mutation
  [Mutations.RESET_BOXES]() {
    this.config = Object.assign({}, this.initial);
  }

  @Mutation
  [Mutations.OVERRIDE_BOXES](): void {
    this.config = this.initial = Object.assign(
      {},
      this.initial,
      JSON.parse(window.localStorage.getItem("BOXS") || "{}")
    );
  }
  @Action
  [Actions.SEND_COMMAND](payload) {
    API.graphql({
      query: createCommand,
      variables: { input: payload },
    });
  }
}
