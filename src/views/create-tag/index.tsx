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

        // 用户选中的表情
        const userSelectEmo = ref<string>("");

        // 标签名错误提示信息
        const titleError = ref<string>("");

        // 未选择表情（或者表情选择值有误）提示信息
        const emoError = ref<string>("");

        // 标签名绑定值
        const titleRef = ref<string>("");

        // 初始化表情目录列表
        const initEmojiCatoryList = () => {
            for (const key in emojiObj) {
                emojiCatoryList.push(key);
            }
        };

        initEmojiCatoryList();

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

        // 选中单个表情事件
        const checkedItemEmoji = (value: string, index: number) => {
            userSelectEmo.value = value;
            emoError.value = "";
        };

        // 点击确定按钮
        const onClickConfirmBtn = () => {
            if (!titleRef.value) {
                titleError.value = "必填";
                return;
            } else {
                titleError.value = "";
            }
            if (!userSelectEmo.value) {
                emoError.value = "必填";
                return;
            } else {
                emoError.value = "";
            }
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
                                    <input type="text" placeholder="2到4个汉字" maxlength={4} v-model={titleRef.value} />
                                    <div class={S.inputErrMsg}>{titleError.value}</div>
                                </div>

                                <div class={S.emojiBox}>
                                    <p>
                                        符号 <span>{userSelectEmo.value} </span>
                                        {emoError.value ? <span class={S.inputErrMsg}>{emoError.value}</span> : ""}
                                    </p>
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
                                                {emojiListRef.value.map((item, index) => {
                                                    return <li onClick={() => checkedItemEmoji(item, index)}>{item}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class={S.tipBox}>记账时长按标签，即可进行编辑</div>
                                <div class={S.footerButtonBox}>
                                    <Button class={S.bottomBtn} onClick={onClickConfirmBtn}>
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
