const errorToString = (error) => {
	if (!error) return '';
	return typeof error === 'string' ? error : error.join(', ');
};

export const formatErrors = (errors) =>
	Object.fromEntries(Object.entries(errors).map(([key, value]) => [key, errorToString(value)]));
