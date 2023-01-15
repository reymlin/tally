import { ref, Ref, onMounted, computed, onUnmounted } from 'vue';

type Point = { x: number; y: number };
export const useSwipe = (element: Ref<HTMLElement | undefined>) => {
    const start = ref<Point>();
    const end = ref<Point>();
    const swiping = ref(false);
    const distance = computed(() => {
        if (!start.value || !end.value) return;

        return {
            x: end.value.x - start.value.x,
            y: end.value.y - start.value.y
        };
    });
    const direction = computed(() => {
        if (!distance.value) return;
        const { x, y } = distance.value;
        if (Math.abs(x) > Math.abs(y)) {
            return x > 0 ? 'right' : 'left';
        } else {
            return y > 0 ? 'down' : 'up';
        }
    });

    let ele: HTMLElement | undefined = undefined;

    onMounted(() => {
        ele = element?.value;
        if (!ele) return;

        ele.addEventListener('touchstart', onTochstart);

        ele.addEventListener('touchmove', onTouchmove);

        ele.addEventListener('touchend', onTouchend);
    });

    const onTochstart = (e: TouchEvent) => {
        e.preventDefault();
        swiping.value = false;
        start.value = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
        end.value = undefined;
    };

    const onTouchmove = (e: TouchEvent) => {
        e.preventDefault();
        end.value = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    };

    const onTouchend = (e: TouchEvent) => {
        e.preventDefault();
        swiping.value = true;
    };

    onUnmounted(() => {
        if (!ele) return;
        ele.removeEventListener('touchstart', onTochstart);
        ele.removeEventListener('touchmove', onTouchmove);
        ele.removeEventListener('touchend', onTouchend);
    });

    return { swiping, distance, direction };
};
