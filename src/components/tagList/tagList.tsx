import { defineComponent, PropType } from "vue";
import S from "./tagList.module.scss";
import tagImg from "@/assets/imgs/tag.jpg";
export const TagList = defineComponent({
    props: {
        tagType: {
            type: String,
            default: () => ""
        },
        list: {
            type: Array as PropType<{ label: string; value: string }[]>,
            default: () => []
        }
    },

    setup(props, context) {
        return () => (
            <div class={S.taglist}>
                <div class={S.itemTagAdd}>
                    <p></p>
                    <span></span>
                </div>
                {props.list.map((item, index) => {
                    return (
                        <div class={S.itemTag}>
                            <p>
                                <img src={tagImg} alt="" />
                            </p>
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
});
