const Card = ({ product }) => {
    return (
      <View style={style.card}>
        <View style={{ alignItems: "flex-end" }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: product.like
                ? "rgba(245, 42, 42, 0.2)"  
                : "rgba(0,0,0,0.2)",    
            }}
          >
            <Icon
              name="favorite"
              size={18}
              color={product.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>
      </View>
    );
  };
