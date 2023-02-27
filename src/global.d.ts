declare namespace svelteHTML {
    interface HTMLAttributes<T> {
        'on:clickoutside'?: (event: CustomEvent) => void;
    }
}