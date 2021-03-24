//
//  REAViewTraverser.m
//  RNReanimated
//
//  Created by Szymon Kapala on 23/03/2021.
//

#import "REAViewTraverser.h"
#import "REAAnimationRootView.h"

@implementation REAViewTraverser

+ (void)traverse:(UIView*)view withBlock:(void (^)(UIView*))block shouldSkipAnimationRoots:(BOOL)shouldSkipAnimationRoots depth:(int)depth
{
    if ([view isKindOfClass:[REAAnimationRootView class]] && shouldSkipAnimationRoots) {
        return;
    }
    
    if (!depth) {
        return;
    }
    
    block(view);
    
    for (int i = 0; i < view.subviews.count; ++i) {
        UIView* subview = view.subviews[i];
        [REAViewTraverser traverse:subview withBlock:block shouldSkipAnimationRoots:true depth:(depth-1)];
    }
}

+ (void)traverse:(UIView*)view withBlock:(void (^)(UIView*))block
{
    if (![view isKindOfClass:[REAAnimationRootView class]]) {
        NSException* myException = [NSException
                exceptionWithName:@"NotAREAAnimationRootView"
                reason:@"View is not a subclass of REAAnimationRootView"
                userInfo:nil];
        @throw myException;
    }
    REAAnimationRootView* animatedRoot = (REAAnimationRootView*)view;
    
    if (!animatedRoot.shouldBeAnimated) {
        return;
    }
    
    int depth = (animatedRoot.isShallow)? 2 : 1e9;
    [REAViewTraverser traverse:view withBlock:block shouldSkipAnimationRoots:false depth:depth];
}

@end
