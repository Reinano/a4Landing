import Typograf from "typograf";
import {useLanguage} from "./useLang";

export const Typograph = props => {
    const isEng = useLanguage();

    const tp = new Typograf({locale: [isEng ? 'ru' : 'ru']});
    return tp.execute(props);
}
