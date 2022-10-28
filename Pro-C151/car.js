AFRAME.registerComponent("car", {
  schema: {
    modelRef: { type: "string", default: "./alfa_romeo_stradale_1967/scene.gltf"}
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 1.3, z: 10 };
    const rotation = { x: 0, y: 45, z: 0 };
    const scale ={x: 100, y: 100, z: 100};
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
    this.el.setAttribute("scale", scale);
  }
});