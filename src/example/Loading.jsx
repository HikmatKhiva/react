function withLoading(Component) {
  return function WithLoadingComponent(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <Component {...props} />
      </>
    );
  };
}
export default withLoading;
