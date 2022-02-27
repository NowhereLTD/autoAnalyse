import {Arguments} from "/src/API/Arguments.class.js";

export class Analyse {
  constructor() {
    return (async function () {
      this.arguments = new Arguments();
      await this.parseArgs(Deno.args);
      await this.run();
    }.bind(this)());
  }

  async parseArgs(args) {
    let parseType = null;
    for(let argument of args) {
      if(argument.match("-")) {
        switch (argument) {
          case "--hosts":
            parseType = "hosts";
            break;
          default:
        }
      }else {
        if(parseType) {
          switch (parseType) {
            case "hosts":
              this.arguments.push(argument);
              break;
            default:
          }
        }
      }
    }
  }


  async run() {
    
  }
}
