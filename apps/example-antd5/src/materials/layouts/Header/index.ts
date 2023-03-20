import { IComponentMaterial } from "@rxdrag/react-core";
import { Header } from "components/layouts/Header";
import { headerLocales } from "./locales";
import { headerSchema } from "./schema";

export const HeaderMaterial: IComponentMaterial = {
  componentName: "Layout.Header",
  component: Header,
  designer: Header,
  designerLocales: headerLocales,
  designerSchema: headerSchema,
  designerProps: {
    disableTrigger: true,
  },
  behaviorRule: {
    draggable: false,
    droppable: true,
    deletable: false,
    cloneable: false,
    noPlaceholder: true,
  },
  resource: {
    name: "Layout.Header",
    elements: [
      {
        componentName: "Layout.Header",
        props: {
        }
      }
    ]
  },
}
