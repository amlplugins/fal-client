/**
 * @amlplugins/fal-client
 *
 * Thin namespaced re-export of the native @fal-ai/client SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Fal.ai Client — serverless generative-AI gateway (image, video, audio, 3D) with subscribe/run/queue APIs.
 */

import * as _sdk from "@fal-ai/client";
export * from "@fal-ai/client";
export { _sdk as sdk };
export default _sdk;
