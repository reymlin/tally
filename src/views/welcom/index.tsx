import S from "./welcom.module.scss";
import logo from "../../assets/logo.svg";
import { WelcomStore } from "../../store/welcom";
import { defineComponent, Transition, VNode, ref } from "vue";
import { RouterView, useRouter, useRoute, RouteLocationNormalizedLoaded } from "vue-router";
export const WelcomIndex = defineComponent({
    setup() {
        const router = useRouter();
        const curentRouter = useRoute();
        const storeWelcom = WelcomStore();

        const onJump = () => {
            router.replace("/start");
        };

        const toNextPage = () => {
            switch (curentRouter.path) {
                case "/welcom/1":
                    router.push("/welcom/2");
                    break;
                case "/welcom/2":
                    router.push("/welcom/3");
                    break;
                case "/welcom/3":
                    router.push("/welcom/4");
                    break;
                case "/welcom/4":
                    router.push("/start");
                    break;
                default:
                    break;
            }
        };

        let fromClassName = ref<string>("");
        let leveToClassName = ref<string>("");
        let leaveActiveClassName = ref<string>("");

        // 订阅Pinia仓库中的State状态
        const subscribe = storeWelcom.$subscribe(
            (state: any) => {
                let _direc: string = state?.payload?.slide_direc || "";
                console.log("_direc", _direc);
                if (_direc === "left") {
                    fromClassName.value = S.enter_from_right;
                    leveToClassName.value = S.leave_to_right;
                    leaveActiveClassName.value = S.leave_active_right;
                } else if (_direc === "right") {
                    fromClassName.value = S.enter_from_left;
                    leveToClassName.value = S.leave_to_left;
                    leaveActiveClassName.value = S.leave_active_left;
                }
                //detached值默认false，如果设置detached值为 true 时，即使所在组件被卸载，订阅依然在生效
            },
            { detached: false }
        );

        return () => (
            <div class={S.welcom}>
                <button class={S.jump} onClick={onJump}>
                    跳过
                </button>
                <header>
                    <img src={logo} alt="" />
                    <p>省钱助手</p>
                </header>
                <div class={S.wrapper}>
                    <RouterView>
                        {({ Component: X, route: R }: { Component: VNode; route: RouteLocationNormalizedLoaded }) => (
                            <Transition
                                enterActiveClass={S.enter_active}
                                enterFromClass={fromClassName.value}
                                leaveToClass={leveToClassName.value}
                                leaveActiveClass={leaveActiveClassName.value}
                            >
                                {X}
                            </Transition>
                        )}
                    </RouterView>
                </div>

                <footer>
                    <button onClick={toNextPage}>下一页</button>
                </footer>
            </div>
        );
    }
});
