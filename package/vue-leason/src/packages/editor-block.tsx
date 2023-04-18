import { computed, defineComponent } from "vue";
export default defineComponent({
    props:{
        block:{type:Object}
    },
    setup(props) {
        const blockStyle = computed(()=>{
            return{
                top:`${(props.block as any).top}px`,
                left:`${(props.block as any).left}px`,
                zIndex:(props.block as any).zIndex,
            }
        })
        return () => (
            <div class='editor-block' style={blockStyle.value}>123</div>
        )
    }
});