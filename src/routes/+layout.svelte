<script lang="ts">
    import { Layout, Side, Header, Content } from "$lib/index.js";
    import './style.css';

    let { children } = $props();

    const routes = [
        { path: "/accordion", title: "Accordion", achieve: true },
        { path: "/alert", title: "Alert", achieve: true },
        { path: "/avatar", title: "Avatar", achieve: true },
        { path: "/badge", title: "Badge", achieve: true },
        { path: "/breadcrumb", title: "Breadcrumb", achieve: true },
        { path: "/button", title: "Button", achieve: true },
        { path: "/calendar", title: "Calendar" },
        { path: "/card", title: "Card", achieve: true },
        { path: "/carousel", title: "Carousel", achieve: true },
        { path: "/cascader", title: "Cascader" },
        { path: "/datepicker", title: "DatePicker" },
        { path: "/drawer", title: "Drawer", achieve: true },
        { path: "/dropdown", title: "Dropdown", achieve: true },
        { path: "/form", title: "Form" },
        { path: "/icon", title: "Icon", achieve: true },
        { path: "/input", title: "Input", achieve: true },
        { path: "/layout", title: "Layout", achieve: true },
        { path: "/message", title: "Message", achieve: true },
        { path: "/menu", title: "Menu" },
        { path: "/modal", title: "Modal", achieve: true },
        { path: "/notification", title: "Notification", achieve: true },
        { path: "/pagination", title: "Pagination", achieve: true },
        { path: "/radio", title: "Radio", achieve: true },
        { path: "/select", title: "Select" },
        { path: "/slider", title: "Slider" },
        { path: "/steps", title: "Steps" },
        { path: "/switch", title: "Switch" },
        { path: "/table", title: "Table", achieve: true },
        { path: "/tabs", title: "Tabs", achieve: true },
        { path: "/tag", title: "Tag", achieve: true },
        { path: "/timeline", title: "Timeline" },
        { path: "/timepicker", title: "TimePicker" },
        { path: "/tooltip", title: "Tooltip", achieve: true },
        { path: "/watermark", title: "WaterMark", achieve: true },
    ];
</script>
<div data-is-root-theme="true" data-accent-color="indigo" data-gray-color="slate" data-has-background="true" data-panel-background="translucent" data-radius="medium" data-scaling="100%" class="radix-themes radix-themes-custom-fonts">
<Layout class="h-screen w-screen">
    <Side class="flex h-full shrink-0 flex-col bg-slate-100 text-sm">
        <div class="py-5 pl-6 font-bold">
            FiveUI Components({routes.length})
        </div>
        <div class="grow overflow-y-auto">
            {#each routes as route}
                <a class="flex w-full flex-row py-2 pl-6 hover:bg-primary-100" href={route.path}>
                    <span class="grow">
                        {route.title}
                    </span>

                    {#if route.achieve}
                        <span class="flex items-center justify-center px-3 text-lime-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path></svg>
                        </span>
                    {/if}
                </a>
            {/each}
        </div>
    </Side>
    <Layout layout="col" class="w-0 grow">
        <Header></Header>
        <Content class="h-0 overflow-y-auto px-5 pb-20">
            {@render children()}
        </Content>
    </Layout>
</Layout>
</div>