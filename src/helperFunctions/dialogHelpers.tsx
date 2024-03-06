

export const disablePropagationHandler: React.MouseEventHandler = e => e.stopPropagation()

export function getFormObject_PreventDefault_StopPropagation (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries((formData as any).entries());

    return formObject;
}