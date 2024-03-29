import { defineComponent, PropType } from "vue";
import S from "./tagList.module.scss";
import { useRouter } from "vue-router";
export const TagList = defineComponent({
    props: {
        tagType: {
            type: String,
            default: () => ""
        },
        list: {
            type: Array as PropType<{ label: string; value: string; img: string }[]>,
            default: () => []
        }
    },

    setup(props, context) {
        const router = useRouter();

        const addBtnClick = () => {
            router.push("/CreateTag");
        };

        return () => (
            <div class={S.taglist}>
                <div class={S.itemTagAdd} onClick={addBtnClick}>
                    <p></p>
                    <span></span>
                </div>
                {props.list.map((item, index) => {
                    return (
                        <div class={S.itemTag}>
                            <p>
                                <img src={item.img} alt="" />
                            </p>
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
});
