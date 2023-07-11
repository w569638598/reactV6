function Alert(props) {
    return (
        <div className={['alert', 'alert-' + props.type, 'alert-dismissible'].join(" ")} role="alert">
            <strong>提示!</strong> {props.alert}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;