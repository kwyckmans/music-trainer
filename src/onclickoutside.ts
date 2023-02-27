export function clickOutside(node: HTMLElement, ignore?: string) {
    console.log("clickOutside called"	);
    const handleClick = (event: Event) => {
        console.log("clickOutside handleClick called"	);
        const target = event.target as HTMLElement;
        if (!event.target || ignore && target.closest(ignore)) {
            return;
        }
        if (node && !node.contains(target) && !event.defaultPrevented) {
            console.log("clickOutside dispatching clickoutside event"	);
            node.dispatchEvent(
                new CustomEvent('clickoutside')
            );
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
};