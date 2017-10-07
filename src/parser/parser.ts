import * as pegParser from "./poly-grammar";

export default function parse(exp: string){
    return pegParser.parse(exp);
}