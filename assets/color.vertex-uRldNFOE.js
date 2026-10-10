import{fi as e}from"./babylon-DhWU1mY1.js";import{a as t,i as n,n as r,o as i,r as a,t as o}from"./bakedVertexAnimation-DDVdw8FG.js";import{n as s,t as c}from"./clipPlaneVertex-BVClAD5r.js";import{n as l,t as u}from"./fogVertex-CBHnWglZ.js";import{t as d}from"./vertexColorMixing-De6VpsFl.js";var f=`colorVertexShader`,p=`attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[f]||(e.ShadersStoreWGSL[f]=p);var m=[i,t,s,l,n,a,r,o,c,u,d];for(let t of m)e.IncludesShadersStoreWGSL[t.name]||(e.IncludesShadersStoreWGSL[t.name]=t.shader);var h={name:f,shader:p};export{h as colorVertexShaderWGSL};