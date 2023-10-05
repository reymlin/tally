import { defineComponent, PropType } from "vue";
import S from "./overlay.module.scss";
import chartImg from "@/assets/imgs/chart.png";
import exportImg from "@/assets/imgs/export.png";
import fenleiImg from "@/assets/imgs/fenlei.png";
import tixingImg from "@/assets/imgs/tixing.png";
import { useRouter } from "vue-router";
export const Overlay = defineComponent({
    props: {
        onClose: {
            type: Function as PropType<() => void>
        }
    },

    setup(props, context) {
        const router = useRouter();

        const { slots } = context;

        const onClose = () => {
            props.onClose?.();
        };

        const onChangeRouter = (path: string) => {
            props.onClose?.();
            router.replace(path);
        };
        return () => (
            <>
                <div class={S.leftbox}>
                    <section class={S.overlayTop}>
                        <p class={S.userName}>未登录用户</p>
                        <p class={S.subtitle}>点击这里登录</p>
                    </section>
                    <section class={S.navList}>
                        <div onClick={() => onChangeRouter("/statics")}>
                            <p>
                                <img src={chartImg} alt="" />
                            </p>
                            <span>统计图表</span>
                        </div>
                        <div onClick={() => onChangeRouter("/bill")}>
                            <p>
                                <img src={exportImg} alt="" />
                            </p>
                            <span>导出数据</span>
                        </div>
                        <div onClick={() => onChangeRouter("/CreateTag")}>
                            <p>
                                <img src={fenleiImg} alt="" />
                            </p>
                            <span>自定义分类</span>
                        </div>
                        <div onClick={() => onChangeRouter("/CreateNote")}>
                            <p>
                                <img src={tixingImg} alt="" />
                            </p>
                            <span>记账提醒</span>
                        </div>
                    </section>
                </div>
                <div class={S.rightMask} onClick={onClose}></div>
            </>
        );
    }
});
