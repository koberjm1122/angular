import { StringMapWrapper, ListWrapper } from 'angular2/src/facade/collection';
import { isBlank, isPresent, stringify } from 'angular2/src/facade/lang';
export class Tree {
    constructor(root) {
        this._root = root;
    }
    get root() { return this._root.value; }
    parent(t) {
        let p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    }
    children(t) {
        let n = _findNode(t, this._root);
        return isPresent(n) ? n.children.map(t => t.value) : null;
    }
    firstChild(t) {
        let n = _findNode(t, this._root);
        return isPresent(n) && n.children.length > 0 ? n.children[0].value : null;
    }
    pathFromRoot(t) { return _findPath(t, this._root, []).map(s => s.value); }
}
export function rootNode(tree) {
    return tree._root;
}
function _findNode(expected, c) {
    if (expected === c.value)
        return c;
    for (let cc of c.children) {
        let r = _findNode(expected, cc);
        if (isPresent(r))
            return r;
    }
    return null;
}
function _findPath(expected, c, collected) {
    collected.push(c);
    if (expected === c.value)
        return collected;
    for (let cc of c.children) {
        let r = _findPath(expected, cc, ListWrapper.clone(collected));
        if (isPresent(r))
            return r;
    }
    return null;
}
export class TreeNode {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
}
export class UrlSegment {
    constructor(segment, parameters, outlet) {
        this.segment = segment;
        this.parameters = parameters;
        this.outlet = outlet;
    }
    toString() {
        let outletPrefix = isBlank(this.outlet) ? "" : `${this.outlet}:`;
        let segmentPrefix = isBlank(this.segment) ? "" : this.segment;
        return `${outletPrefix}${segmentPrefix}${_serializeParams(this.parameters)}`;
    }
}
function _serializeParams(params) {
    let res = "";
    if (isPresent(params)) {
        StringMapWrapper.forEach(params, (v, k) => res += `;${k}=${v}`);
    }
    return res;
}
export class RouteSegment {
    constructor(urlSegments, parameters, outlet, type, componentFactory) {
        this.urlSegments = urlSegments;
        this.parameters = parameters;
        this.outlet = outlet;
        this._type = type;
        this._componentFactory = componentFactory;
    }
    getParam(param) {
        return isPresent(this.parameters) ? this.parameters[param] : null;
    }
    get type() { return this._type; }
    get stringifiedUrlSegments() { return this.urlSegments.map(s => s.toString()).join("/"); }
}
export function serializeRouteSegmentTree(tree) {
    return _serializeRouteSegmentTree(tree._root);
}
function _serializeRouteSegmentTree(node) {
    let v = node.value;
    let children = node.children.map(c => _serializeRouteSegmentTree(c)).join(", ");
    return `${v.outlet}:${v.stringifiedUrlSegments}(${stringify(v.type)}) [${children}]`;
}
export function equalSegments(a, b) {
    if (isBlank(a) && !isBlank(b))
        return false;
    if (!isBlank(a) && isBlank(b))
        return false;
    if (a._type !== b._type)
        return false;
    if (isBlank(a.parameters) && !isBlank(b.parameters))
        return false;
    if (!isBlank(a.parameters) && isBlank(b.parameters))
        return false;
    return StringMapWrapper.equals(a.parameters, b.parameters);
}
export function routeSegmentComponentFactory(a) {
    return a._componentFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWpuVkxBNk55LnRtcC9hbmd1bGFyMi9zcmMvYWx0X3JvdXRlci9zZWdtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FDTyxFQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBQyxNQUFNLGdDQUFnQztPQUNyRSxFQUFPLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sMEJBQTBCO0FBRTVFO0lBSUUsWUFBWSxJQUFpQjtRQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQUMsQ0FBQztJQUVyRCxJQUFJLElBQUksS0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxDQUFJO1FBQ1QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBSTtRQUNYLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFJO1FBQ2IsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzVFLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBSSxJQUFTLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFFRCx5QkFBNEIsSUFBYTtJQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNwQixDQUFDO0FBRUQsbUJBQXNCLFFBQVcsRUFBRSxDQUFjO0lBQy9DLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsbUJBQXNCLFFBQVcsRUFBRSxDQUFjLEVBQUUsU0FBd0I7SUFDekUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsQixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDM0MsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzlELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQ7SUFDRSxZQUFtQixLQUFRLEVBQVMsUUFBdUI7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBRztRQUFTLGFBQVEsR0FBUixRQUFRLENBQWU7SUFBRyxDQUFDO0FBQ2pFLENBQUM7QUFFRDtJQUNFLFlBQW1CLE9BQVksRUFBUyxVQUFtQyxFQUN4RCxNQUFjO1FBRGQsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUFTLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ3hELFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXJDLFFBQVE7UUFDTixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNqRSxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxHQUFHLFlBQVksR0FBRyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDL0UsQ0FBQztBQUNILENBQUM7QUFFRCwwQkFBMEIsTUFBK0I7SUFDdkQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRDtJQU9FLFlBQW1CLFdBQXlCLEVBQVMsVUFBbUMsRUFDckUsTUFBYyxFQUFFLElBQVUsRUFBRSxnQkFBa0M7UUFEOUQsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNyRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztJQUM1QyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDcEUsQ0FBQztJQUVELElBQUksSUFBSSxLQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV2QyxJQUFJLHNCQUFzQixLQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRyxDQUFDO0FBRUQsMENBQTBDLElBQXdCO0lBQ2hFLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELG9DQUFvQyxJQUE0QjtJQUM5RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFFBQVEsR0FBRyxDQUFDO0FBQ3ZGLENBQUM7QUFFRCw4QkFBOEIsQ0FBZSxFQUFFLENBQWU7SUFDNUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2xFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNsRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFFRCw2Q0FBNkMsQ0FBZTtJQUMxRCxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudEZhY3Rvcnl9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTdHJpbmdNYXBXcmFwcGVyLCBMaXN0V3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7VHlwZSwgaXNCbGFuaywgaXNQcmVzZW50LCBzdHJpbmdpZnl9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbmV4cG9ydCBjbGFzcyBUcmVlPFQ+IHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcm9vdDogVHJlZU5vZGU8VD47XG5cbiAgY29uc3RydWN0b3Iocm9vdDogVHJlZU5vZGU8VD4pIHsgdGhpcy5fcm9vdCA9IHJvb3Q7IH1cblxuICBnZXQgcm9vdCgpOiBUIHsgcmV0dXJuIHRoaXMuX3Jvb3QudmFsdWU7IH1cblxuICBwYXJlbnQodDogVCk6IFQge1xuICAgIGxldCBwID0gdGhpcy5wYXRoRnJvbVJvb3QodCk7XG4gICAgcmV0dXJuIHAubGVuZ3RoID4gMSA/IHBbcC5sZW5ndGggLSAyXSA6IG51bGw7XG4gIH1cblxuICBjaGlsZHJlbih0OiBUKTogVFtdIHtcbiAgICBsZXQgbiA9IF9maW5kTm9kZSh0LCB0aGlzLl9yb290KTtcbiAgICByZXR1cm4gaXNQcmVzZW50KG4pID8gbi5jaGlsZHJlbi5tYXAodCA9PiB0LnZhbHVlKSA6IG51bGw7XG4gIH1cblxuICBmaXJzdENoaWxkKHQ6IFQpOiBUIHtcbiAgICBsZXQgbiA9IF9maW5kTm9kZSh0LCB0aGlzLl9yb290KTtcbiAgICByZXR1cm4gaXNQcmVzZW50KG4pICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IG4uY2hpbGRyZW5bMF0udmFsdWUgOiBudWxsO1xuICB9XG5cbiAgcGF0aEZyb21Sb290KHQ6IFQpOiBUW10geyByZXR1cm4gX2ZpbmRQYXRoKHQsIHRoaXMuX3Jvb3QsIFtdKS5tYXAocyA9PiBzLnZhbHVlKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm9vdE5vZGU8VD4odHJlZTogVHJlZTxUPik6IFRyZWVOb2RlPFQ+IHtcbiAgcmV0dXJuIHRyZWUuX3Jvb3Q7XG59XG5cbmZ1bmN0aW9uIF9maW5kTm9kZTxUPihleHBlY3RlZDogVCwgYzogVHJlZU5vZGU8VD4pOiBUcmVlTm9kZTxUPiB7XG4gIGlmIChleHBlY3RlZCA9PT0gYy52YWx1ZSkgcmV0dXJuIGM7XG4gIGZvciAobGV0IGNjIG9mIGMuY2hpbGRyZW4pIHtcbiAgICBsZXQgciA9IF9maW5kTm9kZShleHBlY3RlZCwgY2MpO1xuICAgIGlmIChpc1ByZXNlbnQocikpIHJldHVybiByO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBfZmluZFBhdGg8VD4oZXhwZWN0ZWQ6IFQsIGM6IFRyZWVOb2RlPFQ+LCBjb2xsZWN0ZWQ6IFRyZWVOb2RlPFQ+W10pOiBUcmVlTm9kZTxUPltdIHtcbiAgY29sbGVjdGVkLnB1c2goYyk7XG5cbiAgaWYgKGV4cGVjdGVkID09PSBjLnZhbHVlKSByZXR1cm4gY29sbGVjdGVkO1xuICBmb3IgKGxldCBjYyBvZiBjLmNoaWxkcmVuKSB7XG4gICAgbGV0IHIgPSBfZmluZFBhdGgoZXhwZWN0ZWQsIGNjLCBMaXN0V3JhcHBlci5jbG9uZShjb2xsZWN0ZWQpKTtcbiAgICBpZiAoaXNQcmVzZW50KHIpKSByZXR1cm4gcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVHJlZU5vZGU8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IFQsIHB1YmxpYyBjaGlsZHJlbjogVHJlZU5vZGU8VD5bXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFVybFNlZ21lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VnbWVudDogYW55LCBwdWJsaWMgcGFyYW1ldGVyczoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAgICAgICAgICAgIHB1YmxpYyBvdXRsZXQ6IHN0cmluZykge31cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGxldCBvdXRsZXRQcmVmaXggPSBpc0JsYW5rKHRoaXMub3V0bGV0KSA/IFwiXCIgOiBgJHt0aGlzLm91dGxldH06YDtcbiAgICBsZXQgc2VnbWVudFByZWZpeCA9IGlzQmxhbmsodGhpcy5zZWdtZW50KSA/IFwiXCIgOiB0aGlzLnNlZ21lbnQ7XG4gICAgcmV0dXJuIGAke291dGxldFByZWZpeH0ke3NlZ21lbnRQcmVmaXh9JHtfc2VyaWFsaXplUGFyYW1zKHRoaXMucGFyYW1ldGVycyl9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBfc2VyaWFsaXplUGFyYW1zKHBhcmFtczoge1trZXk6IHN0cmluZ106IHN0cmluZ30pOiBzdHJpbmcge1xuICBsZXQgcmVzID0gXCJcIjtcbiAgaWYgKGlzUHJlc2VudChwYXJhbXMpKSB7XG4gICAgU3RyaW5nTWFwV3JhcHBlci5mb3JFYWNoKHBhcmFtcywgKHYsIGspID0+IHJlcyArPSBgOyR7a309JHt2fWApO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZVNlZ21lbnQge1xuICAvKiogQGludGVybmFsICovXG4gIF90eXBlOiBUeXBlO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHVybFNlZ21lbnRzOiBVcmxTZWdtZW50W10sIHB1YmxpYyBwYXJhbWV0ZXJzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICAgICAgICAgICAgcHVibGljIG91dGxldDogc3RyaW5nLCB0eXBlOiBUeXBlLCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeSA9IGNvbXBvbmVudEZhY3Rvcnk7XG4gIH1cblxuICBnZXRQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNQcmVzZW50KHRoaXMucGFyYW1ldGVycykgPyB0aGlzLnBhcmFtZXRlcnNbcGFyYW1dIDogbnVsbDtcbiAgfVxuXG4gIGdldCB0eXBlKCk6IFR5cGUgeyByZXR1cm4gdGhpcy5fdHlwZTsgfVxuXG4gIGdldCBzdHJpbmdpZmllZFVybFNlZ21lbnRzKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnVybFNlZ21lbnRzLm1hcChzID0+IHMudG9TdHJpbmcoKSkuam9pbihcIi9cIik7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZVJvdXRlU2VnbWVudFRyZWUodHJlZTogVHJlZTxSb3V0ZVNlZ21lbnQ+KTogc3RyaW5nIHtcbiAgcmV0dXJuIF9zZXJpYWxpemVSb3V0ZVNlZ21lbnRUcmVlKHRyZWUuX3Jvb3QpO1xufVxuXG5mdW5jdGlvbiBfc2VyaWFsaXplUm91dGVTZWdtZW50VHJlZShub2RlOiBUcmVlTm9kZTxSb3V0ZVNlZ21lbnQ+KTogc3RyaW5nIHtcbiAgbGV0IHYgPSBub2RlLnZhbHVlO1xuICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLm1hcChjID0+IF9zZXJpYWxpemVSb3V0ZVNlZ21lbnRUcmVlKGMpKS5qb2luKFwiLCBcIik7XG4gIHJldHVybiBgJHt2Lm91dGxldH06JHt2LnN0cmluZ2lmaWVkVXJsU2VnbWVudHN9KCR7c3RyaW5naWZ5KHYudHlwZSl9KSBbJHtjaGlsZHJlbn1dYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsU2VnbWVudHMoYTogUm91dGVTZWdtZW50LCBiOiBSb3V0ZVNlZ21lbnQpOiBib29sZWFuIHtcbiAgaWYgKGlzQmxhbmsoYSkgJiYgIWlzQmxhbmsoYikpIHJldHVybiBmYWxzZTtcbiAgaWYgKCFpc0JsYW5rKGEpICYmIGlzQmxhbmsoYikpIHJldHVybiBmYWxzZTtcbiAgaWYgKGEuX3R5cGUgIT09IGIuX3R5cGUpIHJldHVybiBmYWxzZTtcbiAgaWYgKGlzQmxhbmsoYS5wYXJhbWV0ZXJzKSAmJiAhaXNCbGFuayhiLnBhcmFtZXRlcnMpKSByZXR1cm4gZmFsc2U7XG4gIGlmICghaXNCbGFuayhhLnBhcmFtZXRlcnMpICYmIGlzQmxhbmsoYi5wYXJhbWV0ZXJzKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gU3RyaW5nTWFwV3JhcHBlci5lcXVhbHMoYS5wYXJhbWV0ZXJzLCBiLnBhcmFtZXRlcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91dGVTZWdtZW50Q29tcG9uZW50RmFjdG9yeShhOiBSb3V0ZVNlZ21lbnQpOiBDb21wb25lbnRGYWN0b3J5IHtcbiAgcmV0dXJuIGEuX2NvbXBvbmVudEZhY3Rvcnk7XG59Il19