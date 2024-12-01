<script lang="ts">
	import { resetMode, setMode } from "mode-watcher";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { buttonVariants } from "$lib/components/ui/button/index.js";
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: "outline" })}>
		<span>{@html "&#9680;"}</span>
		<span>Change theme</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item onclick={() => setMode("light")}>Light</DropdownMenu.Item
		>
		<DropdownMenu.Item onclick={() => setMode("dark")}>Dark</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
