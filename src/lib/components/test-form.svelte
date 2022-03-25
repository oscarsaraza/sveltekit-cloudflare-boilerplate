<script>
	import {
		Form,
		Button,
		DatePicker,
		DatePickerInput,
		FormGroup,
		Checkbox,
		RadioButtonGroup,
		RadioButton,
		Select,
		SelectItem,
		TextInput
	} from 'carbon-components-svelte';
	import { createForm } from 'felte';
	import { formatErrors } from '$lib/helpers';

	const { data, errors, isSubmitting, handleSubmit } = createForm({
		initialValues: {
			check0: false,
			check1: false,
			check2: false,
			radioOption: null,
			selectOption: '',
			username: '',
			from: '2021-08-24',
			to: '2021-11-09'
		},
		onSubmit(values) {
			console.log('Default onSubmit', values);
		},
		validate(values) {
			const errors = {};
			if (values.username && values.username.length < 5) errors.username = 'Username too short';
			return errors;
		},
		onError(error) {
			console.log('onError', error);
		}
	});

	$: formattedErrors = formatErrors($errors);
</script>

<h1>Form test</h1>
<Form>
	<FormGroup legendText="Checkboxes">
		<Checkbox id="checkbox-0" labelText="Checkbox Label 1" bind:checked={$data.check0} />
		<Checkbox id="checkbox-1" labelText="Checkbox Label 2" bind:checked={$data.check1} />
		<Checkbox id="checkbox-2" labelText="Checkbox Label 3" bind:checked={$data.check2} />
	</FormGroup>
	<FormGroup legendText="Radio buttons">
		<RadioButtonGroup name="radio-button-group" bind:selected={$data.radioOption}>
			<RadioButton id="radio-1" value="standard" labelText="Standard Radio Button" />
			<RadioButton id="radio-2" value="default-selected" labelText="Default Selected" />
			<RadioButton id="radio-4" value="disabled" labelText="Disabled Radio Button" disabled />
		</RadioButtonGroup>
	</FormGroup>
	<FormGroup>
		<Select
			id="select-1"
			labelText="Select menu"
			bind:selected={$data.selectOption}
			on:change={handleSubmit}
		>
			<SelectItem disabled hidden value="" text="Choose an option" />
			<SelectItem value="option-1" text="Option 1" />
			<SelectItem value="option-2" text="Option 2" />
			<SelectItem value="option-3" text="Option 3" />
		</Select>
	</FormGroup>
	<FormGroup>
		<TextInput
			labelText="User name"
			placeholder="Enter user name..."
			bind:value={$data.username}
			invalid={Boolean($errors.username)}
			invalidText={formattedErrors.username}
		/>
	</FormGroup>
	<DatePicker
		datePickerType="range"
		dateFormat="Y-m-d"
		bind:valueFrom={$data.from}
		bind:valueTo={$data.to}
	>
		<DatePickerInput labelText="From" />
		<DatePickerInput labelText="To" />
	</DatePicker>
	<hr />
	<br />
	<Button type="submit" disabled={$isSubmitting}>Submit</Button>
</Form>
