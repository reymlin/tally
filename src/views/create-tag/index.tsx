import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import S from "./createTag.module.scss";
import { MianLayout } from "@/components/mainLayout/mainLayout";
import returnImg from "@/assets/imgs/return.png";
import { getEmojiFn } from "@/utils/emoji";
import { Button } from "@/components/button/button";

export const CreateTag = defineComponent({
    setup(props, context) {
        const router = useRouter();
        const onBack = () => {
            router.replace("/CreateNote");
        };

        // 表情集合
        const emojiObj = getEmojiFn();

        // 表情目录列表
        const emojiCatoryList: string[] = [];

        // 表情列表
        const emojiListRef = ref<string[]>([]);

        // 选中的表情目录
        const selectedNav = ref<string>("");

        // 初始化表情目录列表
        const initEmojiCatoryList = () => {
            for (const key in emojiObj) {
                emojiCatoryList.push(key);
            }
        };

        initEmojiCatoryList();

        const onClickBtn = () => {};

        // 选择表情目录
        const onSelectEmo = (value: string) => {
            selectedNav.value = value;
            emojiListRef.value = emojiObj[value];
        };

        // 默认选择第一个表情目录
        const initSelectedNav = () => {
            selectedNav.value = emojiCatoryList[0];
            emojiListRef.value = emojiObj[selectedNav.value];
        };

        onMounted(() => {
            initSelectedNav();
        });

        return () => (
            <>
                <MianLayout>
                    {{
                        leftImg: () => <img src={returnImg} onClick={onBack} />,
                        title: () => "新建标签",
                        main: () => (
                            <div class={S.newTagbody}>
                                <div class={S.tagNameBox}>
                                    <p>标签名</p>
                                    <input type="text" placeholder="2到4个汉字" maxlength={4} />
                                    <div class={S.inputErrMsg}>标签名太长</div>
                                </div>

                                <div class={S.emojiBox}>
                                    <p>符号</p>
                                    <div class={S.emojiTable}>
                                        <div class={S.emojiTableNav}>
                                            {emojiCatoryList.map((item) => {
                                                return (
                                                    <span
                                                        onClick={() => {
                                                            onSelectEmo(item);
                                                        }}
                                                        class={[item === selectedNav.value ? S.selectedNav : ""]}
                                                    >
                                                        {item}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        <div class={S.emojiTableList}>
                                            <ul>
                                                {emojiListRef.value.map((item) => {
                                                    return <li>{item}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class={S.tipBox}>记账时长按标签，即可进行编辑</div>
                                <div class={S.footerButtonBox}>
                                    <Button class={S.bottomBtn} onClick={onClickBtn}>
                                        确定
                                    </Button>
                                </div>
                            </div>
                        )
                    }}
                </MianLayout>
            </>
        );
    }
});
