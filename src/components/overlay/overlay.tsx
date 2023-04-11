import { defineComponent, PropType } from "vue";
import S from "./overlay.module.scss";
export const Overlay = defineComponent({
    props: {
        onClose: {
            type: Function as PropType<() => void>
        }
    },

    setup(props, context) {
        const { slots } = context;

        const onClose = () => {
            props.onClose?.();
        };
        return () => (
            <>
                <div class={S.leftbox}>
                    <section>
                        <p>未登录用户</p>
                        <p>点击这里登录</p>
                    </section>
                    <section>
                        <div>
                            <p></p>
                            <span>统计图表</span>
                        </div>
                        <div>
                            <p></p>
                            <span>导出数据</span>
                        </div>
                        <div>
                            <p></p>
                            <span>自定义分类</span>
                        </div>
                        <div>
                            <p></p>
                            <span>记账提醒</span>
                        </div>
                    </section>
                </div>
                <div class={S.rightMask} onClick={onClose}></div>
            </>
        );
    }
});
